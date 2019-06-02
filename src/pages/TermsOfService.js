import Row from "react-bootstrap/Row";
import React from "react";
import "./getADemo/GetADemo.css";
import "./privacyAndSecurity/privacyAndSecurity.css";
import * as contentful from "contentful";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router-dom";

class TermsOfService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setSpace = () => {
    return this.props.setSpace(this.props.match.params.space);
  };

  setAccessToken = () => {
    return this.props.setAccessToken(this.props.match.params.space);
  };

  client = contentful.createClient({
    space: this.setSpace(),
    accessToken: this.setAccessToken()
  });

  componentDidMount() {
    this.fetchGetADemo().then(this.setGetADemo);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.locale !== this.props.match.params.locale) {
      this.fetchGetADemo().then(this.setGetADemo);
    }
  }

  fetchGetADemo = () => {
    return this.client.getEntries({
      content_type: "privacyAndSecurity",
      locale: this.props.match.params.locale
    });
  };

  setGetADemo = response => {
    const privacyContent = response.items[0].fields;
    for (let key in privacyContent) {
      if (typeof privacyContent[key] === "string") {
        this.setState({
          [key]: privacyContent[key]
        });
      } else {
        this.setState({
          [key]: privacyContent[key].content
        });
      }
    }
  };

  render() {
    return (
<Container className="secondary_font">
              <div class="text-lg-center text-md-center text-sm-center text-xs-center">
                <Row className="center-in-row">
            <p className="hidden-xs-down primary_font privacy-upper-title">
              Cialfo
            </p>
            </Row>
            <Row className="center-in-row">
              <h1 className="primary_font privacy-title">Terms of Service</h1>
            </Row>
            <br />
          </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p>
            <strong>THIS AGREEMENT</strong>
            <span> is made</span>
          </p>
          <p>
            <strong>BETWEEN:</strong>
          </p>
          <p>
            <span>(1)</span>
            <strong>CIALFO PTE. LTD.</strong>
            <span>(company registration no.: 201213872E), a company incorporated in Singapore with its registered address and principal place of business at 797 North Bridge Rd, Level 2, Singapore 198765 (“</span>
            <strong>Cialfo</strong>
            <span>”); and</span>
          </p>
          <p>
            <span>(2) The Customer organization or individual (“</span>
            <strong>Customer</strong>
            <span>”) (collectively referred to as the “</span>
            <strong>Parties</strong>
            <span>” and each a “</span>
            <strong>Party</strong>
            <span>”)</span>
          </p>
          <p>
            <strong>WHEREAS:</strong>
          </p>
          <p>(a) Cialfo has developed and owns the System.</p>
          <p>(b) The Parties wish to enter into this Agreement to govern the usage of the System and related services to be provided by Cialfo to the Customer.</p>
          <p>
            <strong>NOW IT IS AGREED</strong>
            <span> as follows:</span>
          </p>
          <h5 class="text-uppercase">
            <strong>1. DEFINITIONS</strong>
          </h5>
          <p>1.1 In this Agreement, unless the context otherwise requires, the following expression have the following meanings:</p>
          <p>”Agreement Form” : means the Cialfo-approved form or online subscription process by which you agree to subscribe to the System. Most Agreement Forms are completed through our online payment process or via in-app purchase.</p>
          <p>“Intellectual Property Rights” : means all vested, contingent and/or future intellectual property rights including but not limited to copyright, trademarks, service marks, design rights (whether registered or unregistered), patents, know-how, trade secrets, inventions, get-up, database rights and any application for the protection or registration or these rights and all renewals and extensions thereof existing in any part of the world whether now known or in the future created to which Cialfo may be entitled;</p>
          <p>“Fee” : the fee payable by the Customer to Cialfo for the Use Right;</p>
          <p>“PDPA“: has the meaning ascribed to it in Clause 2.4;</p>
          <p>“System”: means the internet platform and software service which Cialfo is providing to the Customer including any updates relating thereto that may be provided hereunder or thereunderby Cialfo and any derivative works of the foregoing;.</p>
          <p>“System Administrators” : has the meaning ascribed to it in Clause 2.3;</p>
          <p>“Taxes“: has the meaning ascribed to it in Clause 4.4;</p>
          <p>“Use Right”: the right to use granted by Cialfo pursuant to Clause 2.1;</p>
          <p>“US$”: the lawful currency of United States of America;</p>
          <p>“User”: means such person to whom the Customer has granted access to use the System, regardless of whether the User actually accesses the System.</p>
          <p>1.2 Unless the context otherwise requires:</p>
          <p>(a) references to statutory provisions shall be construed as references to those provisions as respectively replaced, amended or re-enacted (whether before or after the date hereof) from time to time and shall include any provisions of which there are re-enactments (whether with or without modification) and any subordinate legislation made under such provision so far as such modification or re-enactment applies or is capable of applying to any transactions entered into and (so far as liability thereunder may exist or can arise) shall include also any past statutory provisions or regulations (as from time to time modified or re-enacted) which such provisions or regulations have directly or indirectly replaced;</p>
          <p>(b) words importing the singular include the plural and vice versa, words importing any gender include every gender, words importing persons include bodies corporate and unincorporate and references to time shall mean Singapore time;</p>
          <p>(c) references to Clauses, Recitals and other provisions in this Agreement and the Schedules to this Agreement are references to Clauses, Recitals and other provisions of, and Schedules to this Agreement and terms defined in the Recitals shall have the same meanings where used throughout this Agreement;</p>
          <p>(d) Clause headings are for convenience of reference only and shall not affect the interpretation of this Agreement; and</p>
          <p>(e) Schedules and Recitals are an integral part of this Agreement and have the same force and effect as if expressly set out in the body of this Agreement and reference to this Agreement includes reference to all the aforesaid.</p>
          <h5 class="text-uppercase">
            <strong>2. USE RIGHT</strong>
          </h5>
          <p>2.1 During the term of this Agreement and subject to the terms and conditions herein, Cialfo grants to the Customer a non-exclusive and non-transferable right to permit the Customer’s Users to use the System for the Customer’s business purposes.</p>
          <p>2.2 The Parties agree that:</p>
          <p>(a) the Customer shall be entitled to display its logo and other branding on the System; and</p>
          <p>(b) Cialfo shall be identified in the System as the technology partner of the Customer.</p>
          <p>
            <span>2.3 The Customer shall designate one or more system administrators (“</span>
            <strong>System Administrators</strong>
            <span>”). The System Administrators shall be responsible for managing User access including but not limited to adding and subtracting Users. The System Administrator shall ensure that multiple Users do not share a password or user name. Customer acknowledges and agrees that it is prohibited from sharing passwords and/or user names with unauthorised users.</span>
          </p>
          <p>
            <span>2.4 The Customer represents and warrants to Cialfo that it has at all times complied with and will continue to comply with the requirements of the Personal Data Protection Act (Act 26 of 2012 of Singapore) (“</span>
            <strong>PDPA</strong>
            <span>”), whether applicable to the Customer and/or Cialfo, in respect of the collection, use, disclosure and other handling of personal data. Specifically, the Customer agrees and undertakes with Cailfo that its privacy policy with the Users shall contain provisions which entitles Cialfo to collect and use personal data of the Users for its own internal analytics.</span>
          </p>
          <p>2.5 The Customer acknowledges and agrees that the System is not intended for use with protected sensitive information such as credit card numbers, financial account numbers. The Customer assumes all risk arising from use of any such sensitive information with the System including but not limited to the risk of any inadvertent disclosure or unauthorised access thereto. The Customer is responsible for ensuring that the Customer and Customer’s Users’ use of the System is in compliance with all applicable laws and governmental regulations. The Customer acknowledges and agrees to assume all risk arising from any such use that is not compliant with applicable laws and regulations.</p>
          <p>2.6 The Customer agrees to the privacy policy of Cialfo (“Privacy Policy”) located at this <a href="/privacy-policy" target="_blank">link</a>. The Customer further acknowledges and agrees that Cialfo as well as its representatives and/or agents may from time to time amend, modify or otherwise update this Privacy Policy at its discretion, without prior notification to the Customer. The Customer shall be bound by the Privacy Policy as may be amended, modified or otherwise updated.</p>
          <p>2.7 The Customer hereby authorises Cialfo to use its logo for all of Cialfo’ marketing activities including but not limited to publishing the logo on Cialfo’s web and mobile applications.</p>
          <h5 class="text-uppercase">
            <strong>3. TERM</strong>
          </h5>
          <p>3.1  Subject to Clause 3.2 below and until or unless terminated in accordance with any of the provision of this Agreement, this Agreement shall commence on the date stated in page 1 of the Agreement Form and shall terminate on the date stated in page 1 of the Agreement Form (“Initial Period”).</p>
          <p>3.2 At the end of the Initial Period, this Agreement shall be automatically renewed for:</p>
          <p>(a) a further period of the same duration as the Initial Period; or</p>
          <p>(b) one (1) year</p>
          <p>whichever is shorter, unless either Party gives the other Party three (3) months advance notice of its intention not to renew this Agreement.</p>
          <h5 class="text-uppercase">
            <strong>4. PAYMENT</strong>
          </h5>
          <p>4.1 In consideration for the Use Right and services provided by Cialfo to the Customer, the Customer agrees to pay the Fee.</p>

          <p>4.2 The Parties agree that in the event of termination of this Agreement (for whatsoever reason and howsoever arising) prior to the agreed expiration date of this Agreement, the Customer shall be liable for make payment in respect of all amount payable by the Customer to Cialfo for the entire duration of this Agreement as if this Agreement has been performed in full.</p>
          <p>4.3 The Fee and other charges payable under this Agreement are exclusive of any applicable GST which shall be payable by the Customer at the rate and in the manner prescribed by law. For clarification, “GST” shall refer to tax payable under the Goods and Services Tax Act of Singapore as may be amended from time to time.</p>
          <p>4.4  All payments by the Customer under this Agreement shall be paid in US Dollars without set-off or counterclaim and free and clear of and without deduction or withholding for or on account of any taxes, levies, imposts, duties, fees, assessments or other charges of whatever nature, imposed by any relevant jurisdiction, or by any department, agency or other political subdivision or taxing authority thereof, and all interest, penalties or similar liabilities with respect thereto (“Taxes”), unless deduction or withholding of such Taxes is required by law, in which event the Customer shall pay such additional amount as shall be required to ensure that the net amount received by Cialfo will equal the full amount which would have been received by them had no such deduction or withholding been made.</p>
          <h5 class="text-uppercase">
            <strong>5. RESTRICTIONS</strong>
          </h5>
          <p>The Customer undertakes not to:</p>
          <p>(a) Sub-contract, assign, rent, lease or transfer the Use Right or the System or make or distribute copies of the System except as permitted by this Agreement;</p>
          <p>(b) translate, adapt, vary, modify, disassemble, decompile or reverse engineer the System without Cialfo’s prior written consent;</p>
          <p>(c) Create any derivative works based upon the System;</p>
          <p>(d) Make copies of the System, in whole or in part, except for back-up or archival purposes as permitted in by Cialfo.</p>
          <h5 class="text-uppercase">
            <strong>6. SECURITY AND CONTROL</strong>
          </h5>
          <p>6.1 The Customer shall during the continuance of this Agreement:</p>
          <p>(a) Effect and maintain adequate security measures to safeguard the System from access or used by any unauthorised person;</p>
          <p>(b) Retain the System and all copies thereof under the Customer’s effective control;</p>
          <p>(c) Maintain a full and accurate record of the Customer’s copying and disclosure of the System and shall produce such record to Cialfo on request from time to time.</p>
          <p>6.2 The Customer shall immediately notify Cialfo if it becomes aware of any loss or theft or unauthorised use of any of the Customer’s passwords and/or usernames.</p>
          <p>6.3 Cialfo shall ensure that the System Availability Level (as determine in the manner set out below) of the System is not less than 98%. System Availability Level shall be determined according to the following formula:[RP1]</p>
          <p>System availability = [Operating hours - System Downtime] / [Operating hours] x 100%.</p>
          <p>For the purpose of Clauses 6.3 and 6.4:</p>
          <p>“Operating Hours" means the scheduled operating hours of the System which will be, unless otherwise specified, for twenty-four (24) hours on a daily basis including all Saturdays, Sundays and public holidays.</p>
          <p>"System Downtime" means the accumulated time during which the System is not fully available for use due to the issue of software configurations within the control of Cialfo measured from the time of such failure is reported to Cialfo to the time when the System is returned to proper operation. For the avoidance of doubt:</p>
          <p>(a) For computation of System Downtime, the failure must be of Severity level 1 (as defined below);</p>
          <p>(b) Cialfo shall not be responsible for unavailability of the System due to issue relating to hosting of the System on third party cloud server;</p>
          <p>(c) Scheduled maintenance shall not be included in the computation of System Downtime. Cialfo shall provide the Customer with two (2) days prior notice of any scheduled maintenance.</p>
          <p>6.4 Cialfo agrees that:</p>
          <p>(a) in the case where the System cannot perform without remedial action from Cialfo (Severity Level 1), Cialfo shall rectify the error within reasonable time. Cialfo shall provide report on progress of such remedial action to the Customer within one (1) Business Day from the date Cialfo is notified of such incident.</p>
          <p>(b) in the case where the System can perform but some parts of it are affected (Severity Level 2), Cialfo shall rectify the error within reasonable time. Cialfo shall provide report on the progress of such remedial action to the Customer within two (2) Business Days from the date Cialfo is notified of such incident.</p>
          <p>6.5 The Customer agrees and acknowledges that:</p>
          <p>Cialfo maintains all data that it collects in accordance with its internet security protocols which can be accessed at <a href="https://cialfo.co/security">https://cialfo.co/security</a>.</p>
          <p>For as long as Cialfo maintains the data that it has collected in accordance with its security protocol, it shall not be liable for any data breach.</p>
          <h5 class="text-uppercase">
            <strong>7. PROPRIETARY RIGHTS</strong>
          </h5>
          <p>7.1 The System and the Intellectual Property Rights of whatever nature in the System are and shall remain the property of Cialfo.</p>
          <p>7.2 The Customer shall notify Cialfo immediately if the Customer becomes aware of any unauthorised use of the whole or any part of the System and/or Intellectual Property Rights by any person.</p>
          <h5 class="text-uppercase">
            <strong>8. INTELLECTUAL PROPERTY AND DISCOVERY</strong>
          </h5>
          <p>8.1 The Customer acknowledges that any and all trademarks, trade names, copyrights, patents and other Intellectual Property Rights created, developed, embodied in or in connection with the System or any enhancement thereto shall be and remain the sole property of Cialfo and the Customer undertakes to assign (or cause to be assigned) all its interest therein to Cialfo or its nominee. The Customer shall not during or at any time after the termination of this Agreement in any way question or dispute the ownership by Cialfo of any such rights.</p>
          <p>8.2 Whenever requested to do so by Cialfo, the Customer shall execute any and all applications, assignments or other instruments which Cialfo deems necessary to give effect to this Clause.</p>
          <h5 class="text-uppercase">
            <strong>9. CONFIDENTIALITY</strong>
          </h5>
          <p>
            <span>9.1 Both Parties to this Agreement undertake, except as provided below, to treat as confidential and keep secret all information marked “confidential” or which may reasonably be supposed to be confidential, including without limitation, information contained or embodied in the System and other information supplied by the Customer or Cialfo (collectively referred to as the “</span>
            <strong>Information</strong>
            <span>”) with the same degree of care as its employs with regard to its own confidential information of a like nature and in any event in accordance with best current commercial security practices, provided that, this Clause shall not extend to any information which was rightfully in the possession of either Party prior to the commencement of the negotiations leading to this Agreement or which is already public knowledge or become so at future date (otherwise than as a result of a breach of this Clause).</span>
          </p>
          <p>9.2 Both Parties shall not without the prior written consent of the other Party divulges any part of the Information to any person except:</p>
          <p>(a) To their own employees and then only to those employees who need to know the same;</p>
          <p>(b) To a court of competent jurisdiction, governmental body or applicable regulatory authority and any other persons or bodies having a right, duty or obligation to know the business of the other Party and then only in pursuance of such right duty or obligation;</p>
          <p>9.3 Both Parties undertake to ensure that persons and bodies referred to in Clause 9.2 are made aware before the disclosure of any part of the Information that the same is confidential and that they owe a duty of confidence to the other Party.</p>
          <p>9.4 Each Party to this Agreement shall promptly notify the other Party if it becomes aware of any breach of confidence by any person to whom it divulges all or any part of the Information and shall give the other Party all reasonable assistance in connection with any proceedings which the other Party may institute against such person for breach of confidence.</p>
          <p>9.5 The foregoing obligations as to confidentiality shall remain in full force and effect notwithstanding any termination of the Use Right or this Agreement.</p>
          <h5 class="text-uppercase">
            <strong>10. TERMINATION AND SUSPENSION</strong>
          </h5>
          <p>10.1 Cialfo may terminate this Agreement forthwith on giving notice in writing to the Customer if:</p>
          <p>(a) the Customer commits any serious breach of any term of this Agreement and (in the case of a breach capable of being remedied) shall have failed, within three (3) days after the receipt of a request in writing from Cialfo to do so, to remedy the breach (such request to contain a warning of Cialfo’s intention to terminate);</p>
          <p>(b) the Customer becomes the subject of a petition in bankruptcy or any other proceeding relating to insolvency, liquidation or assignment for the benefit of creditors.</p>
          <p>10.2  The Parties agree that:</p>
          <p>(a) Save as provided in Clause 12.2, this Agreement shall end on the relevant expiration date.</p>
          <p>(b) Save as provided in Clause 10.1 above, neither Party may terminate this Agreement prematurely.</p>
          <p>(c) in the event the Customer terminates this Agreement through no fault on the part of Cialfo, all payment paid by the Customer to Cialfo shall be non-refundable.</p>
          <p>10.3  Forthwith upon the termination of this Agreement, the Customer shall return to Cialfo all access to the System and all copies of the whole or any part thereof or, if requested by Cialfo, shall destroy the same (in the case of access to the System by erasing them from the magnetic media on which they are stored) and certify in writing to Cialfo that they have been destroyed.</p>
          <p>10.4  Any termination of this Agreement (howsoever occasioned) shall not affect any accrued rights or liabilities of either Party nor shall it affect the coming into force or the continuance in force of any provision in this Agreement which is expressly or by implication intended to come into or continue in force on or after such termination.</p>
          <p>10.5  Cialfo may, without notice, suspend the Customer’s access to any or all of the System if:</p>
          <p>(a) usage of the System by the Customer is in violation of any laws, rules and/or regulations;</p>
          <p>(b) repeated instances of posting or uploading materials that infringe or is alleged to infringe intellectual property rights belonging to others;</p>
          <p>(c) failure on the part of the Customer to make payment to Cialfo;</p>
          <p>(d) Cialfo, in its absolute discretion, considers it appropriate to suspend usage of the System by the Customer in order to preserve the integrity and/or proper functioning of the System.</p>
          <p>For the avoidance of doubt, Cialfo shall be under no obligation to refund any amount paid by the Customer in respect of the period of suspension.</p>
          <h5 class="text-uppercase">
            <strong>11. AGENCY AND PARTNERSHIP</strong>
          </h5>
          <p>This Agreement shall not constitute or imply any partnership, joint venture, agency, fiduciary relationship or other relationship between the Parties other than the contractual relationship expressly provided for in this Agreement.</p>
          <h5 class="text-uppercase">
            <strong>12. AMENDMENTS</strong>
          </h5>
          <p>12.1 Cialfo may unilaterally amend this Agreement by giving notice to the Customer. Except as provided in Clause 12.2, the amendment will take effect on the date the notice is given by Cialfo to the Customer.</p>
          <p>12.2  If the Customer is unwilling for the Agreement to continue as amended, it may terminate the Agreement by giving notice to Cialfo within three (3) Business Days from the date the notice is given by Cialfo to the Customer.</p>
          <h5 class="text-uppercase">
            <strong>13. ASSIGNMENTS</strong>
          </h5>
          <p>13.1 This Agreement is personal to the Parties and neither this Agreement nor any rights, licenses or obligations under it, may be assigned by either Party without the prior written approval of the other Party.</p>
          <p>13.2 Any attempted assignment in violation of this Clause will be void and without effect.</p>
          <h5 class="text-uppercase">
            <strong>14. ENTIRE AGREEMENT</strong>
          </h5>
          <p>This Agreement supersedes all prior agreements, arrangements and undertakings between the Parties and constitutes the entire agreement between the Parties relating to the subject matter of this Agreement. However, the obligations of the Parties under any pre-existing non-disclosure agreement shall remain in full force and effect in so far as there is no conflict between the same. The Parties confirm that they have not entered into this Agreement on the basis of any representation that is not expressly incorporated into this Agreement.</p>
          <h5 class="text-uppercase">
            <strong>15. NOTICES</strong>
          </h5>
          <p>15.1 All notices under this Agreement shall be in writing.</p>
          <p>15.2 Notices shall be deemed to have been duly given:</p>
          <p>(a) When delivered, if delivered by courier or other messenger (including registered mail) during normal business hours of the recipient; or</p>
          <p>(b) When sent, if transmitted by fax or e-mail and a successful transmission report or return receipt is generated; or</p>
          <p>(c) On the third calendar day following mailing, if mailed by ordinary mail, postage prepaid; or</p>
          <p>(d) On the tenth calendar day following mailing, if mailed by airmail, postage prepaid.</p>
          <p>In each case addressed to the most recent address, e-mail address, or facsimile number notified to the other Party.</p>
          <h5 class="text-uppercase">
            <strong>16. SEVERANCE</strong>
          </h5>
          <p>If any provision of this Agreement is prohibited by law or judged by a court to be unlawful, void or unenforceable, the provision shall, to the extent required be severed from this Agreement and rendered ineffective as far as possible without modifying the remaining provision of this Agreement, and shall not in any way affect any other circumstances of or the validity or enforcement of this Agreement.</p>
          <h5 class="text-uppercase">
            <strong>17. SUCCESSORS AND ASSIGNEES</strong>
          </h5>
          <p>17.1 This Agreement shall be binding upon, and inure to the benefit of, the Parties and their respective successors and permitted assignees, and references to a Party in this Agreement shall include its successors and permitted assignees.</p>
          <p>17.2 In this Agreement references to a Party include references to a person:</p>
          <p>(a) Who for the time being is entitled (by assignment, novation or otherwise) to that Party’s rights under this Agreement (or any interest in those rights); or</p>
          <p>(b) Who, as administrator, liquidator or otherwise, is entitled to exercise those rights,</p>
          <p>and in particular those references include a person to whom those rights (or any interest in those rights) are transferred or pass as a result of a merger, division, reconstruction or other reorganisation involving that Party. For this purpose, references to a Party’s rights under this Agreement include any similar rights to which another person becomes entitled as a result of a novation of this Agreement.</p>
          <h5 class="text-uppercase">
            <strong>18. WAIVER</strong>
          </h5>
          <p>No delay, neglect or forbearance on the part of either Party in enforcing against the other Party any term or condition of this Agreement shall either be or deemed to be a waiver or in any way prejudice any right of that Party under this Agreement. No right, power or remedy in this Agreement conferred upon or reserved for either Party is exclusive of any other right, power or remedy available to that Party.</p>
          <h5 class="text-uppercase">
            <strong>19. EXECUTION IN COUNTERPARTS</strong>
          </h5>
          <p>This Agreement may be signed in any number of counterparts, all of which taken together and when delivered to the Parties by facsimile or by electronic mail in "portable document format (".pdf") form, or by any other electronic means intended to preserve the original graphic and pictorial appearance of a document, or by a combination of such means, shall constitute one and the same instrument. Any Party may enter into this Agreement by manually signing any such counterpart transmitted electronically or by facsimile or other electronic signature (such as Pandadoc) by any of the Parties to any other Party and the receiving Party may rely on the receipt of such document so executed and delivered by facsimile or other electronic means as if the original had been received. Such signatures executed by way of facsimile or other electronic means (such as Pandadoc) shall be recognised and construed as secure electronic signatures pursuant to the Electronic Transactions Act 2010 and that the Parties accordingly shall deem such signatures to be original signatures for all purposes.</p>
          <h5 class="text-uppercase">
            <strong>20. TIME OF THE ESSENCE</strong>
          </h5>
          <p>Time shall be of the essence in this Agreement as regards any time, date or period mentioned in this Agreement or subsequently substituted as a time, date or period by agreement in writing between the Parties.</p>
          <h5 class="text-uppercase">
            <strong>21. COST AND EXPENSES</strong>
          </h5>
          <p>Each Party shall bear its own legal costs and other costs and expenses arising in connection with the drafting, negotiation, execution and registration (if applicable) of this Agreement.</p>
          <h5 class="text-uppercase">
            <strong>22. CONTRACTS (RIGHTS OF THIRD PARTIES) ACT</strong>
          </h5>
          <p>A person or entity who is not a Party to this Agreement has no right under the Contracts (Rights of Third Parties) Act (Cap. 53B) to enforce any term of this Agreement.</p>
          <h5 class="text-uppercase">
            <strong>23. GOVERNING LAW AND JURISDICTION</strong>
          </h5>
          <p>This Agreement shall be governed by and construed according to the laws of Singapore. Each Party hereby submits to the exclusive jurisdiction of the Singapore courts.</p>
          <h5 class="text-uppercase">
            <strong>24. FURTHER ASSURANCE</strong>
          </h5>
          <p>The Parties shall execute and do and procure all other persons if necessary, to execute and do all such further deeds, assurances, acts and things as may be reasonably required so that full effect may be given to the terms and conditions of this Agreement.</p>
        </div>
        <Row className="center-in-row pb-5">
          <h1>···</h1>
        </Row>
</Container>
    );
  }
}

export default withRouter(TermsOfService);
