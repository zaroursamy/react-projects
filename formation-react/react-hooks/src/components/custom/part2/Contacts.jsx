import {useState, useTransition} from 'react';
import Search from './Search';
import useUpdateTitle from '../part1/hooks/useUpdateTitle';
import ContactsTable from './ContactsTable';
import useFetch from "./hooks/useFetch.jsx";

function Contacts() {

    const [search, setsearch] = useState('');
    const [isPending, startTransition] = useTransition()
    const [filteredUsers, setFilteredUsers] = useState([])


    const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/users')
    useUpdateTitle(search)

    const handleChange = (e) => {
        const searchValue = e.target.value
        setsearch(searchValue)
        startTransition(() => {
            filterUsersFromSearch(searchValue)
        })
    }

    const msgDisplay = (msg, color) => {
        return(
            <p style={{textAlign: 'center', color: color}}>
                {msg}
            </p>
        )
    }

    const filterUsersFromSearch = (searchParam) => {
        setFilteredUsers(data.filter(user => Object.values(user).join(' ').toLowerCase().includes(searchParam.toLowerCase())))
    }


    return (
        <>
            {
                loading ? msgDisplay("Please waiting", "red") : (
                    <Search
                        search={search}
                        searchHandler={handleChange}
                    />
                )
            }

            {
                filteredUsers.length > 0 ?
                    <ContactsTable data={filteredUsers} pending={isPending}/> :
                    msgDisplay("No results", "red")

            }
        </>
    );
}

export default Contacts;