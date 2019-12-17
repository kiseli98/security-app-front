import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

class DropzoneAreaExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }

  handleChange(files) {
    this.setState({
      files: files
    });
  }

  render() {
    return (
      <DropzoneArea
        dropzoneClass={this.props.className}
        onChange={this.handleChange.bind(this)}
        {...this.props}
      />
    )
  }
}

export default DropzoneAreaExample;