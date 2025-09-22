import {useGetSpecializationsQuery} from "@entities/specialization/api/SpecializationApi.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@app/providers/store/appStore.ts";
import SidebarSection from "@shared/ui/SidebarSection/SidebarSection.tsx";
import {setSpecialization} from "@features/question/Filter/model/FilterSlice.ts";

export const QuestionFilterBySpecialization = () => {
    const dispatch = useDispatch();
    const {selectedSpecialization} = useSelector((state: RootState) => state.filters)
    const {data: specializationsData, isLoading} = useGetSpecializationsQuery({})

    if(!specializationsData) return null
    if(isLoading) return <div>Загрузка...</div>

    const specializations = specializationsData.data

    const handleFilterChange = (id: number) => {
        dispatch(setSpecialization(id))
    }

    return (
        <SidebarSection
            title="Специализация:"
            items={specializations}
            activeItems={selectedSpecialization ? [selectedSpecialization] : []}
            onToggle={handleFilterChange}
        />
    );
};
