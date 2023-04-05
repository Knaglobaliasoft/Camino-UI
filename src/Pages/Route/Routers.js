import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AssessmentReport from '../AssessmentReport/AssessmentReport';
import Dashboard from '../Dashboard/Dashboard';
import FigureDetail from '../FigureDetail/FigureDetail';
import Login from '../Login/Login';
import NewPatient from '../NewPatient/NewPatient';
import PatientList from '../PatientList/PatientList';
import ProfileGuide from '../ProfileGuide/ProfileGuide';
import TinettiGait from '../TinettiGait/TinettiGait';
import TinettiDetail from '../TinettiDetail/TinettiDetail';
import Welcome from '../Welcome/Welcome';
import SetUp from '../SetUp/SetUp';
import Instruction from '../Instruction/Instruction';
import Test from '../Test/Test';
import Recording from '../Recording/Recording';
import Figure from '../Figure/Figure';
import FigureSetup from '../FigureSetup/FigureSetup';
import Instruction2 from '../Instruction2/Instruction2';
import TestRecording from '../TestRecording/TestRecording';
import RightsideTest from '../RightsideTest/RightsideTest';
import LeftsideTest from '../LeftsideTest/LeftsideTest';
import Questionaire from '../Questionaire/Questionaire';
import QuestionaireID from '../Questionaire/QuestionaireID';
import QuestionnaireClose from '../Questionaire/QuestionnaireClose';
import Assessment from '../Assessment/Assessment';
import ChooseTests from '../ChooseTests/ChooseTests';
import Question3 from '../Questionaire/Question3';
import Question4 from '../Questionaire/Question4';
import Question5 from '../Questionaire/Question5';
import Question6 from '../Questionaire/Question6';
import Question7 from '../Questionaire/Question7';
import RecordTest from '../RecordTest/RecordTest';
import ReviewAssessment from '../ReviewAssessment/ReviewAssessment';
import CloseAssessment from '../CloseAssessment/CloseAssessment';
import Question8 from '../Questionaire/Question8';
import Question9 from '../Questionaire/Question9';
import Question10 from '../Questionaire/Question10';
import Question11 from '../Questionaire/Question11';
import AddnewPatient from '../Questionaire/AddnewPatient';
import Question12 from '../Questionaire/Question12';
import Question13 from '../Questionaire/Question13';
import Question14 from '../Questionaire/Question14';
import Question15 from '../Questionaire/Question15';
import Question16 from '../Questionaire/Question16';
import Question17 from '../Questionaire/Question17';
import Question18 from '../Questionaire/Question18';
import Question19 from '../Questionaire/Question19';
import Question20 from '../Questionaire/Question20';

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/patientlist" element={<PatientList />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/newpatient" element={<NewPatient />} />
                <Route path="/profileguide" element={<ProfileGuide />} />
                <Route path="/assessmentreport" element={<AssessmentReport />} />
                <Route path="/tinettidetail" element={<TinettiDetail />} />
                <Route path="/figuredetail" element={<FigureDetail />} />
                <Route path="/tinettigait" element={<TinettiGait />} />
                <Route path="/setup" element={<SetUp />} />
                <Route path="/instruction" element={<Instruction />} />
                <Route path="/test" element={<Test />} />
                <Route path="/assessment" element={<Assessment />} />
                <Route path="/closeassessment" element={<CloseAssessment />} />
                <Route path="/reviewassessment" element={<ReviewAssessment />} />
                <Route path="/ChooseTests" element={<ChooseTests />} />
                <Route path="/recording" element={<Recording />} />
                <Route path="/figure" element={<Figure />} />
                <Route path="/figuresetup" element={<FigureSetup />} />
                <Route path="/figureinstruction" element={<Instruction2 />} />
                <Route path="/rightsidetest" element={<RightsideTest />} />
                <Route path="/testrecording" element={<TestRecording />} />
                <Route path="/recordtest" element={<RecordTest />} />
                <Route path="/leftsidetest" element={<LeftsideTest />} />
                <Route path="/questionaire" element={<Questionaire />} />
                <Route path="/questionaireid" element={<QuestionaireID />} />
                <Route path="/questionnaireclose" element={<QuestionnaireClose />} />
                <Route path="/question3" element={<Question3 />} />
                <Route path="/question4" element={<Question4 />} />
                <Route path="/question5" element={<Question5 />} />
                <Route path="/question6" element={<Question6 />} />
                <Route path="/question7" element={<Question7 />} />
                <Route path="/question8" element={<Question8 />} />
                <Route path="/question9" element={<Question9 />} />
                <Route path="/question10" element={<Question10 />} />
                <Route path="/question11" element={<Question11 />} />
                <Route path="/addnewpatient" element={<AddnewPatient />} />
                <Route path="/question12" element={<Question12 />} />
                <Route path="/question13" element={<Question13 />} />
                <Route path="/question14" element={<Question14 />} />
                <Route path="/question15" element={<Question15 />} />
                <Route path="/question16" element={<Question16 />} />
                <Route path="/question17" element={<Question17 />} />
                <Route path="/question18" element={<Question18 />} />
                <Route path="/question19" element={<Question19 />} />
                <Route path="/question20" element={<Question20 />} />
            </Routes>
        </Router>
    )
}

export default Routers