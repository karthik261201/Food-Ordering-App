import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()
        // console.log(json)

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate() {
        // console.log("Component did Update")
    }

    componentWillUnmount() {
        // console.log("Component will unmount")
    }

    render() {
        const { name, location } = this.state.userInfo

        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : @karthik07</h4>
            </div>
        );
    }
}

export default UserClass;