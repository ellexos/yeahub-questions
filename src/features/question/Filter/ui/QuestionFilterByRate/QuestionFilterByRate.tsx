import SidebarSection from "@shared/ui/SidebarSection/SidebarSection.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@app/providers/store/appStore.ts";
import {removeRate, setRate} from "@features/question/Filter/model/FilterSlice.ts";
import {rating} from "@features/question/Filter/model/constants.ts";

export const QuestionFilterByRate = () => {
    const dispatch = useDispatch()
    const {selectedRate} = useSelector((state: RootState) => state.filters)

    const handleToggle = (id: number) => {
        if (selectedRate.includes(id))
            dispatch(removeRate(id))
        else dispatch(setRate(id))
    }

    return (
        <SidebarSection
            title="Рейтинг: "
            items={rating}
            activeItems={selectedRate}
            onToggle={handleToggle}
        />
    );
};