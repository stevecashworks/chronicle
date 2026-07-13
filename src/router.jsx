import { createBrowserRouter } from "react-router-dom";

import LoadingPage from "./pages/loading/loading";
import Dashboard from "./pages/admin/dashboard/dashboard";
import StateParameterPage from "./pages/admin/state/state"
import LocalGovernmentPArameterPage from "./pages/admin/local-government/localGovernment"
import QualificationParameterPage from "./pages/admin/qualifications/qualifications";
import SchoolsParameterPage from "./pages/admin/schools-and-colleges/schools-and-colleges"
import MedicalGroupParameterPage from "./pages/admin/medical-groups/medical-groups";
import FacilityTypeParameterPage from "./pages/admin/facility-type/facility-type";
import FacilityRequirementParameterPage from "./pages/admin/facility-requirements/facility-requirements";
import MedicalAssetsParameterPage from "./pages/admin/medical-assets/medical-assets";
import HomePage from "./pages/home/home"
import AssessmentGradingPage from "./pages/admin/assessment-grading/assessment-grading";
import FacilityApprovalParameterPage from "./pages/admin/facility-approval/facility-approval";
import BillItemsPage from "./pages/admin/bill-items/bill-items";
import BillSettingsPage from "./pages/admin/bill settings/bill-settings";
import BillProcessingPage from "./pages/admin/bill-processing/bill-processing";
import BillApprovalPage from "./pages/admin/bill-approval/bill-approval";
import CashbookEntryPage from "./pages/admin/cashbook-entry/cashbook-entry";
import InboxPage from "./pages/admin/inbox/inbox";
import MedicalOfficerOnboardingPage from "./pages/onboarding/medical-officer/medicalOfficer";
import FacilityOnboardingPage from "./pages/onboarding/medical-facility/medicalFacility";
import StateMinistryOnboardingPage from "./pages/onboarding/state-ministry/state_ministry";
import StateDashboard from "./pages/state-dashboard/state-dashboard";
import Login from "./pages/state-login/Login";
const router= createBrowserRouter([
    
    {path:"/",element:<HomePage />},
    {path:"/dashboard", element:<Dashboard/>},
    {path:"/state-parameter", element:<StateParameterPage/>},
    {path:"/local-government-parameter", element:<LocalGovernmentPArameterPage/>},,
    {path:"/qualification-parameter", element:<QualificationParameterPage/>},
    {path:"/colleges-parameter", element:<SchoolsParameterPage/>},
    {path:"/medical-group-parameter", element:<MedicalGroupParameterPage/>},
    {path:"/facility-type-parameter", element:<FacilityTypeParameterPage/>},
    {path:"/facility-requirements-parameter", element:<FacilityRequirementParameterPage/>},
    {path:"/medical-assets-parameter", element:<MedicalAssetsParameterPage/>},
    {path:"/assessment-grading", element:<AssessmentGradingPage/>},
    {path:"/facility-approval", element:<FacilityApprovalParameterPage/>},
    {path:"/bill-items", element:<BillItemsPage/>},
    {path:"/bill-settings", element:<BillSettingsPage/>},
    {path:"/bill-processing", element:<BillProcessingPage/>},
    {path:"/bill-approval", element:<BillApprovalPage/>},
    {path:"/cashbook-entry", element:<CashbookEntryPage/>},
    {path:"/inbox", element:<InboxPage/>},
    {path:"/dashboard/state", element:<StateDashboard/>},
    {path:"/onboarding/medical-officer", element:<MedicalOfficerOnboardingPage/>},
    {path:"/onboarding/medical-facility", element:<FacilityOnboardingPage/>},
    {path:"/onboarding/state-ministry", element:<StateMinistryOnboardingPage/>},
    {path:"/state-login", element:<Login />},
    

    
    
    
   
])
export default  router
