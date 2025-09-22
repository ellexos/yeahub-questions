export interface IQuestion{
    id: number,
    title: string,
    description: string,
    imageSrc: string,
    shortAnswer: string,
    longAnswer: string,
    rate: number;
    complexity: number;
    keywords: string[];
    questionSkills: { id:number, imageSrc: string, title: string }[]
}

export interface QuestionResponseParams{
    page: number,
    limit: number,
    skills: string[],
    complexity: string[],
    rate: number[],
    keywords: number[],
    specialization: number



    // id: number;
    // title: string;
    // description: string;
    // shortAnswer: string;
    // longAnswer: string;
    // status: string;
    // rate: number;
    // complexity: number;
    // keywords: string[];
    // questionSpecializations: ISpecialization[];
    // questionSkills: ISkill[];
}





// export interface IQuestionsResponse {
//     page: number;
//     limit: number;
//     total: number;
//     data: IQuestion[];
// }
//
// export interface GetQuestionsParams {
//     page: number;
//     limit: number;
//     specialization: number | null;
//     skills: number[];
//     complexity: number[];
//     rate: number[];
//     search: string;
// }