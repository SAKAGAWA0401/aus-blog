'use server'

import { google } from 'googleapis';
import { WebClient } from '@slack/web-api';

const slackToken = process.env.SLACK_TOKEN; // 環境変数でSlackトークンを管理
const slackChannel = process.env.SLACK_CHANNEL; // 通知先のチャンネルID
const slackClient = new WebClient(slackToken);

// Google Sheets API認証設定
const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'), // 改行を適切に扱うための処理
    },
    projectId: process.env.GOOGLE_PROJECT_ID,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  
  const sheets = google.sheets({ version: 'v4', auth });
  
// フォームデータをGoogle SheetsとSlackに追加
export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;
  const japanTime = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

  // Validate input
  if (!name || !email || !message) {
    throw new Error('Missing required fields');
  }

  try {
    // Add to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: 'Sheet1!A1', // Assumes the first sheet in the spreadsheet
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[japanTime, name, email, message]],
      },
    });

    // Send Slack notification
    if (!slackChannel) {
      throw new Error('Slack channel is not defined');
    }

    await slackClient.chat.postMessage({
      channel: slackChannel,
      text: `<@U07V0GXL5U4> *New contact form submission:*\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`,
    });

    return { success: true, message: 'Form submitted successfully' };
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    throw new Error('Failed to submit form');
  }
}
