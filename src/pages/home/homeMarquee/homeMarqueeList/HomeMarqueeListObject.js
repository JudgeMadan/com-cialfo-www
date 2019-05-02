import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import * as contentful from "contentful";

class HomeMarqueeListObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const marqueeItem = this.props.marqueeItemArray;
    const marqueeItemImage = this.props.marqueeItemArray.fields.marqueeImage
      .fields.file.url;
    console.log(marqueeItem);
    return (
      <div className="orb marqueeItem">
        <div className="orb-image">
          <Image src={marqueeItemImage} roundedCircle />
          <Row>{marqueeItem.fields.marqueeContent}</Row>

          <h6>Dale Ford!</h6>
          <p>British Intl School Phuket</p>
        </div>
      </div>
    );
  }
}
export default HomeMarqueeListObject;

{
  /* <div className="orb ">
<img src="https://fillmurray.com/150/100" />
</div> */
}

{
  /* <div id="testContentGreen" className="orb test">
<Image src="https://fillmurray.com/75/50" roundedCircle />
<p>
  Cialfo's international focus, service, <br /> nimble approach to
  product <br /> improvement and reasonable cost <br /> made it the
  platform for us.
</p>
<h6>Dale Ford</h6>
<p>British Intl School Phuket</p>
</div> */
}
