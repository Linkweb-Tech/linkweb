import React from 'react'


class Tile extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				open: false,
				mouseOver: false
			};
			// Bind properties to class instance
			this._clickHandler = this._clickHandler.bind(this);
			this._mouseEnter = this._mouseEnter.bind(this);
			this._mouseLeave = this._mouseLeave.bind(this);
		}
		// Event handlers to modify state values
	_mouseEnter(e) {
		e.preventDefault();
		if (this.state.mouseOver === false) {
			console.log(this.props.data.name);
			this.setState({
				mouseOver: true
			})
		}
	}
	_mouseLeave(e) {
		e.preventDefault();
		if (this.state.mouseOver === true) {
			this.setState({
				mouseOver: false
			})
		}
	}
	_clickHandler(e) {
		e.preventDefault();
		if (this.state.open === false) {
			this.setState({
				open: true
			});
		} else {
			this.setState({
				open: false
			});
		}
	}

	render() {
		// Modify styles based on state values
        let tileStyle = {};
        let bgStyle = {};
		let headerStyle = {};
		let zoom = {};
		// When tile clicked
		if (this.state.open) {
            bgStyle = {
                position: 'fixed',
                zIndex: '50',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.9)',
                width: '100%',
                top: '0',
                left: '0',
                bottom: '0',
                right:  '0'
            },
			tileStyle = {
				width: '58vw',
				height: '58vw',
				position: 'absolute',
				top: '50%',
				left: '50%',
				margin: '0',
				marginTop: '-29vw',
				marginLeft: '-29vw',
				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
				transform: 'none'
			};
		} else {
			tileStyle = {
				width: '18vw',
				height: '18vw'
            },
            bgStyle = {
                position: 'relative',
                height: '100%',
                width: '100%',
                top: '0',
                left: '0',
                bottom: '0',
                right:  '0'
            }
		}

		return (
			<div className="tile">
                <div style={bgStyle}>
                    <img
                        onMouseEnter={this._mouseEnter}
                        onMouseLeave={this._mouseLeave}
                        onClick={this._clickHandler}
                        src={this.props.data.image}
                        alt={this.props.data.name}
                        style={tileStyle}
                    />
                </div>
			</div>
		);
	}
}

export default Tile;