import arrowLeft from '@shared/assets/images/Arrow_btn_left.svg'
import arrowRight from '@shared/assets/images/Arrow_btn_right.svg'
import s from './Pagination.module.css'

interface PaginationProps {
    currentPage: number,
    totalPages: number,
    limit: number,
    onPageChange: (page: number) => void
}


function makeArrayOfPages(start: number, elementsCount: number) : number[] {
    return [...Array.from({length: elementsCount}, (__, i) => i + start)]
}


export const Pagination = ({currentPage, totalPages, onPageChange}: PaginationProps) => {

    if(totalPages <=1) return null

    function getPages(siblings = 2){

        const capacity = siblings * 2 + 5
        if(totalPages <= capacity) return makeArrayOfPages(1, totalPages)

        const innerLength = capacity - 4
        const innerStart = Math.min( totalPages - (2 + siblings), Math.max(3 + siblings, currentPage))
        const innerSlot: number[] = makeArrayOfPages(innerStart - siblings, innerLength)
        const leftSlot: number | string = (currentPage > 2 + siblings ) ? '...' : 2
        const rightSlot: number | string = (currentPage < totalPages - (2 + siblings)) ? '...' : totalPages - 1

        return [1, leftSlot, ...innerSlot, rightSlot, totalPages]
    }

    const pages = getPages()

    return (
        <div className={s.root}>
            <button
                className={s.arrowBtn}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage-1)}
            >
                <img src={arrowLeft} alt="Предыдущая страница"/>
            </button>
            <div className={s.allNumbers}>
                {
                    pages.map((page, i) => (
                        page === '...'
                            ? <span key={i}>...</span>
                            : <button
                                className={`${s.arrowNumber} ${(page === currentPage) ? s.active : ''}`}
                                disabled={currentPage === page}
                                key={i}
                                onClick={() => onPageChange(page as number)}
                            >
                                {page}
                            </button>
                    ))
                }
            </div>
            <button
                className={s.arrowBtn}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage+1)}
            >
                <img src={arrowRight} alt="Следующая страница"/>
            </button>

        </div>
    );
};
