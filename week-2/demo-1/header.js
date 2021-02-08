class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        { this.props.name }
                    </a>
                </div>
            </nav>
        )
    }
}
