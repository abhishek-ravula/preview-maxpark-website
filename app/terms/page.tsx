export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using MaxPark's services, you accept and agree to be bound by the terms and provision
                  of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
                <p className="text-gray-600 mb-4">
                  Permission is granted to temporarily use MaxPark's services for personal, non-commercial transitory
                  viewing only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                <p className="text-gray-600 mb-4">
                  The materials on MaxPark's services are provided on an 'as is' basis. MaxPark makes no warranties,
                  expressed or implied.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us at legal@maxpark.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
