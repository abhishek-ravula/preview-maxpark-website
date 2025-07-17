// import { Navbar } from "@/components/NavBar";
import { Card, CardContent } from "@/components/ui/card";

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-12 md:mt-4">
      <Card className="max-w-3xl w-full shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-4xl font-bold text-center text-orange-500 mb-6">
            How to Delete Your Account
          </h1>

          <p className="text-gray-700 mb-8">
            If you wish to delete your account from our app, follow the steps
            below:
          </p>

          <ol className="space-y-8">
            <li className="flex gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Step 1: Go to the Profile Screen
                </h2>
                <p className="text-gray-700 mt-1">
                  Open the app and navigate to the{" "}
                  <span className="text-orange-500 font-medium">
                    Profile screen
                  </span>{" "}
                  by tapping on your profile icon in the top-left corner.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Step 2: Click on the Settings Screen
                </h2>
                <p className="text-gray-700 mt-1">
                  Once on the Profile screen, tap the{" "}
                  <span className="text-orange-500 font-medium">
                    Settings icon
                  </span>{" "}
                  (typically a gear icon) to access the settings menu.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Step 3: Navigate to Delete My Account
                </h2>
                <p className="text-gray-700 mt-1">
                  In the Settings screen, scroll down and find the option that
                  says{" "}
                  <span className="text-orange-500 font-medium">
                    Delete My Account
                  </span>
                  . Tap on this option to proceed.
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Step 4: Confirm Deletion
                </h2>
                <p className="text-gray-700 mt-1">
                  A confirmation screen will appear. To confirm, tap the{" "}
                  <span className="text-orange-500 font-medium">
                    Delete Account
                  </span>{" "}
                  button. Once deleted, your account will be permanently
                  removed.
                </p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
