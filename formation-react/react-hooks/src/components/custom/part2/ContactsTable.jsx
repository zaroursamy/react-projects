function ContactsTable({data, pending}) {

    return (
        <table id='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
            {pending && <tr><td colSpan={4} style={{color: 'red'}}>Please wait ...</td></tr>}
                {data.map(({name, username, email}, i) => {
                    return (
                        <tr key={i}>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default ContactsTable;