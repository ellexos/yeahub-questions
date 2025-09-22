import {Input} from "@shared/ui/Input";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "@app/providers/store/appStore.ts";
import {setKeywords} from "@features/question/Filter/model/FilterSlice.ts";
import {useDebounce} from "@shared/lib/hooks/useDebounce.ts";
import {useEffect, useState} from "react";

export const QuestionSearch = () => {
    const dispatch = useDispatch()
    const {keywords} = useSelector((state: RootState) => state.filters)
    const [searchValue, setSearchValue] = useState('')

    const debouncedValue = useDebounce(searchValue, 1500)

    useEffect(() => {
        dispatch(setKeywords(debouncedValue.trim()))
    }, [debouncedValue, dispatch, keywords])


    return (
        <Input
            placeholder='Введите вопрос...'
            value={searchValue}
            onChange={(value) => setSearchValue(value)}
        />
    );
};
