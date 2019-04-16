import React from "react";

class HomeParterImages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const images = this.props.partnerImages;
    let imageObject;

    if (images) {
      imageObject = images.map(image => {
        return <img src={image} />;
      });
    }

    return (
      <div>
        <h1>{imageObject}</h1>
      </div>
    );
  }
}
export default HomeParterImages;
