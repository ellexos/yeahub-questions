import SidebarSection from "@shared/ui/SidebarSection/SidebarSection.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@app/providers/store/appStore.ts";
import {setSkill, removeSkill} from "@features/question/Filter/model/FilterSlice.ts";
import {useGetSkillsQuery} from "@entities/skill/api/SkillApi.ts";

export const QuestionFilterBySkill = () => {
    const dispatch = useDispatch();
    const {
        selectedSkills,
        selectedSpecialization
    } = useSelector((state: RootState) => state.filters)

    const {
        data: skillsData,
        isLoading
    } = useGetSkillsQuery({specializations: selectedSpecialization })


    if(!skillsData) return null
    if(isLoading) return <div>Загрузка...</div>

    const skills = skillsData.data


    const handleFilterChange = (id: number) => {
      if (selectedSkills.includes(id))
          dispatch(removeSkill(id))
      else dispatch(setSkill(id))
    }

    return (
        <SidebarSection
            title="Навыки:"
            items={skills}
            activeItems={selectedSkills}
            onToggle={handleFilterChange}
        />
    );
};
