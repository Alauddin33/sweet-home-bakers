import { useEffect } from "react";



const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Sweet Home Bakers`;
    }, [title])

}

export default useTitle;