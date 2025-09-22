import {createBrowserRouter} from "react-router-dom";
import {QuestionsPublicPage} from "@pages/question/QuestionsPublicPage";
import {QuestionDetailsPage} from "@pages/question/QuestionDetailsPage";
import {Layout} from "@app/layouts/Layout.tsx";



export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <QuestionsPublicPage/>
            },
            {
                path: 'questions',
                element: <QuestionsPublicPage/>
            },
            {
                path: 'questions/:id',
                element: <QuestionDetailsPage/>,
            }
        ]
    },
])