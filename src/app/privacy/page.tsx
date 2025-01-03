import RootLayout from '@/app/layout'
import { getPrivacyPolicy } from '@/lib/actions/blog-actions'

export default async function PrivacyPage() {
  const privacyPolicy = await getPrivacyPolicy()

  return (
    <RootLayout showProfile={false}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose">
          {privacyPolicy ? (
            <>
              <div dangerouslySetInnerHTML={{ __html: privacyPolicy.content.replace(/\n/g, '<br>'), }} />
              <br></br>
              <p>Last updated: {new Date(privacyPolicy.revisedAt).toLocaleDateString()}</p>
              <p>Published on: {new Date(privacyPolicy.publishedAt).toLocaleDateString()}</p>
            </>
          ) : (
            <p>Privacy policy content could not be loaded.</p>
          )}
        </div>
      </div>
    </RootLayout>
  )
}
