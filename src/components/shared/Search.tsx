import { Input } from "antd"
import { FaSearch } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { SearchComponent } from "../../Types/PageProps"

const Search = ({ value, setValue }: SearchComponent) => {
    return (
        <Input onChange={(e) => setValue(e.target.value)} value={value} placeholder="Search here" className="w-80 h-11"
            prefix={<FaSearch size={20} />}
            suffix={<RxCross2 onClick={() => setValue('')} className="cursor-pointer hover:text-red-600" size={24} />}
        />
    )
}

export default Search
