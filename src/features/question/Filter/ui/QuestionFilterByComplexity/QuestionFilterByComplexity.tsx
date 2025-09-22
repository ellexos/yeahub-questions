import SidebarSection from "@shared/ui/SidebarSection/SidebarSection.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@app/providers/store/appStore.ts";
import {complexity} from "@features/question/Filter/model/constants.ts";
import {removeComplexity, setComplexity} from "@features/question/Filter/model/FilterSlice.ts";


export const QuestionFilterByComplexity = () => {
    const dispatch = useDispatch();
    const {selectedComplexity} = useSelector((state: RootState) => state.filters)

    const handleToggle = (id: number) => {
        if (selectedComplexity.includes(id)) dispatch(removeComplexity(id))
        else dispatch(setComplexity(id))
    }

    return (
        <SidebarSection
            title="Сложность: "
            items={complexity}
            activeItems={selectedComplexity}
            onToggle={handleToggle}
        />
    );
};