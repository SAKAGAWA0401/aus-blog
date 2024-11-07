import { getPrivacyPolicy } from '@/lib/actions/blog-actions'

export default async function PrivacyPage() {
  const privacyPolicy = await getPrivacyPolicy()

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose">
        {privacyPolicy ? (
          <>
            <p>Last updated: {new Date(privacyPolicy.revisedAt).toLocaleDateString()}</p>
            <p>Published on: {new Date(privacyPolicy.publishedAt).toLocaleDateString()}</p>
            <div dangerouslySetInnerHTML={{ __html: privacyPolicy.content }} />
          </>
        ) : (
          <p>Privacy policy content could not be loaded.</p>
        )}
      </div>
    </div>
  )
}
