import {Component} from 'react';
import profile from '../assets/profile.png'
class Profile extends Component {

    state = {
        id: null,
        data: {}
    }

    componentDidMount() {

        const id = this.props.match.params.id

        console.log(id)
        this.setState({
            id: id
        })

        const data = fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

        data.then(json => (
                this.setState({
                    data: json[id]
                })
        ))

    }

    render() {


        const {email, name, phone, username, website} = this.state.data

        return (
            <div className='container mt-3'>
                <h1>User profile</h1>
                <img src={profile} alt='profile' style={{width: '150px', height: '150px'}} />
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span><strong>Identifiant</strong>: {this.state.id}</span>
                    </li>
                    <li className='list-group-item'>
                        <span><strong>Name</strong>: {name}</span>
                    </li>
                    <li className='list-group-item'>
                        <span><strong>Email</strong>: {email}</span>
                    </li>
                    <li className='list-group-item'>
                        <span><strong>Phone</strong>: {phone}</span>
                    </li>
                    <li className='list-group-item'>
                        <span><strong>Username</strong>: {username}</span>
                    </li>
                    <li className='list-group-item'>
                        <span><strong>Website</strong>: {website}</span>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Profile;