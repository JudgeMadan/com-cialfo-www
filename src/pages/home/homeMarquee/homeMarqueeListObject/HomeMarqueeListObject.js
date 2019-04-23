import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class HomeMarqueeListObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="testContentGreen" className="orb test">
        <Image src="https://fillmurray.com/75/50" roundedCircle />
        <p>
          Cialfo's international focus, service, <br /> nimble approach to
          product <br /> improvement and reasonable cost <br /> made it the
          platform for us.
        </p>
        <h6>Dale Ford!</h6>
        <p>British Intl School Phuket</p>
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
