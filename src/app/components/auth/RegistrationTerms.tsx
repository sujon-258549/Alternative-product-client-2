import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const RegistrationTerms = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-yellow  p-0 h-auto">
          Terms and Conditions
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-5xl max-h-[90vh] overflow-y-auto bg-[#424242] text-white">
        <div className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Registration Terms and Conditions
            </h1>
            <p className="text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By registering an account with our service, you agree to be
                bound by these Terms and Conditions, our Privacy Policy, and all
                applicable laws and regulations. If you do not agree with any of
                these terms, you are prohibited from using or accessing this
                service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                2. Account Registration
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You must be at least 18 years old to register an account
                </li>
                <li>
                  You agree to provide accurate, current, and complete
                  information during registration
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials
                </li>
                <li>
                  You are solely responsible for all activities that occur under
                  your account
                </li>
                <li>
                  We reserve the right to refuse service or terminate accounts
                  at our discretion
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                3. User Responsibilities
              </h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use the service for any illegal purpose or in violation of any
                  laws
                </li>
                <li>Harass, abuse, or harm other users</li>
                <li>
                  Post or transmit any content that is offensive, defamatory, or
                  infringes on intellectual property rights
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the
                  service
                </li>
                <li>
                  Use automated systems (bots, scrapers, etc.) to access the
                  service without permission
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                4. Data Privacy
              </h2>
              <p>
                Your privacy is important to us. Our collection and use of your
                personal information in connection with your use of the service
                is described in our Privacy Policy. By registering, you consent
                to such collection and use.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                5. Service Modifications
              </h2>
              <p>
                We reserve the right to modify or discontinue, temporarily or
                permanently, the service (or any part thereof) with or without
                notice. We shall not be liable to you or any third party for any
                modification, suspension, or discontinuance of the service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                6. Termination
              </h2>
              <p>
                We may terminate or suspend your account immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if you breach these Terms. Upon termination,
                your right to use the service will immediately cease.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                In no event shall our company be liable for any indirect,
                incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses, resulting from your access
                to or use of or inability to access or use the service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. We will provide notice of any
                changes by posting the new Terms on this page. Your continued
                use of the service after any such changes constitutes your
                acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                9. Governing Law
              </h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of your jurisdiction, without regard to its conflict of
                law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                10. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms, please contact us
                at{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-blue-400 hover:underline"
                >
                  support@example.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
