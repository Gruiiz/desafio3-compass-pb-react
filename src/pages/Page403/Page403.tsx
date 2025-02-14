import { Link } from "react-router-dom";

export default function AccessDenied() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6 text-center">
        {/* Error Content */}
        <div className="space-y-4">
          <h2 className="text-6xl font-bold text-[#B88E2F]">
            403
          </h2>
          <p className="text-2xl font-semibold text-gray-900">
            Access Restricted
          </p>
          <p className="text-gray-600 mt-2">
            Please authenticate to proceed to checkout.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mt-8">
          <Link
            to="/login"
            className="w-full inline-block px-6 py-3 text-base font-medium text-center text-white bg-[#B88E2F] rounded-md hover:bg-[#B88E4F] transition-colors"
          >
            Sign In to Continue
          </Link>
          
          <Link
            to="/"
            className="text-sm text-black hover:text-[#B88E2F] font-medium"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}