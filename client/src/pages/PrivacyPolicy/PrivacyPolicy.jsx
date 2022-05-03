import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <h1>Privacy Policy</h1>
      <p>This mobile application does not store any personal information other than your name and event information that is necessary for the app or to help improve the app itself.</p>
      <p>This privacy policy applies between you, the User of this Mobile Application, and Pippin Burkett, the owner and provider of this Mobile Application. We take the privacy of your information very seriously. This privacy policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Mobile Application.</p>
      <p>This privacy policy should be read alongside our Terms of Service, which can be found at <Link to="/terms-of-service">Terms of Service</Link>.</p>
      <h2>Auth0 Information</h2>
      <p>This app uses Auth0 for user login.</p>
      <p>User information is stored by Auth0 or third party providers where you sign on through Google, LinkedIn, GitHub or Figma.</p>
      <h2>Definitions and interpretation</h2>
      <ul>
	<li>In this privacy policy, the following definitions are used:
	<table>
		<tbody>
			<tr>
				<td>Data</td>
				<td>collectively all information that you submit to Pippin Burkett via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws;</td>
			</tr>
			<tr>
				<td>Data Protection Laws</td>
				<td>
				<p>any applicable law relating to the processing of personal Data, including but not limited to the GDPR, and any national implementing and supplementary laws, regulations and secondary legislation;</p>
				</td>
			</tr>
			<tr>
				<td>GDPR</td>
				<td>
				<p>The UK General Data Protection Regulation;</p>
				</td>
			</tr>
			<tr>
				<td>Pippin Burkett, we or us</td>
				<td>Pippin Burkett of London</td>
			</tr>
			<tr>
				<td>User or you</td>
				<td>any third party that accesses the Website and is not either (i) employed by Pippin Burkett and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to Pippin Burkett and accessing the Website in connection with the provision of such services; and</td>
			</tr>
			<tr>
				<td>Website</td>
				<td>the website that you are currently using,https://fullstack-accessibility-app.herokuapp.com, and any sub-domains of this site unless expressly excluded by their own terms and conditions.</td>
			</tr>
		</tbody>
	</table>
	</li>
	<li>In this privacy policy, unless the context requires a different interpretation:
	<ol>
		<li>the singular includes the plural and vice versa;</li>
		<li>references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this privacy policy;</li>
		<li>a reference to a person includes firms, companies, government entities, trusts and partnerships;</li>
		<li>"including" is understood to mean "including without limitation";</li>
		<li>reference to any statutory provision includes any modification or amendment of it;</li>
		<li>the headings and sub-headings do not form part of this privacy policy.</li>
	</ol>
	</li>
</ul>
    <h2>Scope of Privacy Policy</h2>
    <p>This prviacy policy applies only to the actions of Pippin Burkett and Users with respect to this Mobile Application. It does not extends to any websites that can be accessed from this Mobile Application including, but not limited to, any links to social media websites.</p>
    <p>For purposes of the applicable Data Protection Laws, Pippin Burkett is the "data controller". This means that Pippin Burkett determinds the purposes for which, and the manner in which, your Data is processed.</p>
    <h2>Data Collected</h2>
    <p>We may collect your name, information about your events and sessions on this mobile application in accordance with this privacy policy.</p>
    <h2>How we collect Data</h2>
    <p>We collect Data by data that is give to us by you and data that is collected automatically.</p>
    <h2>Data that is given to us by you</h2>
    <p>Pippin Burkett will collect your Data when you contact us through the mobile application and when you use our services in accordance with this policy.</p>
    <h2>Data that is collected automatically</h2>
    <p>When you access the mobile application, we will automatically collect some information about your visit to the mobile application. This information helps us to make improvements to Website content and navigation, and includes your IP address, the data, times and frequency with which you access the mobile application and the way you use and interact with its content.</p>
    <h2>Our use of Data</h2>
    <p>Any or all of the above Data may be required by us from time to time in order to provide you with the best possible service and experience when using our mobile application. Specifically Data may be used for internal record keeping and improvement of our products/services in accordance with this privacy policy.</p>
    <p>We may use your Data for the above purposes if we deem it necessary to do so for our legitimate interests. If you are not satisfied with this, you have the right to object in certain circumstances (see the section headed "Your rights" below).</p>
    <h2>Keeping Data Secure</h2>
    <p>We will use technical and organisational measures to safeguard your Data, for example: access to your account is controlled by a password and a user name that is unique to you and we store your Data on secure servers.
	</p>
  <p>Technical and organisational measures include measures to deal with any suspected data breach. If you suspect any misuse or loss or unauthorised access to your Data, please let us know immediately by contacting us via this e-mail address: hello (at) pippin.codes</p>
  <p>If you want detailed information from Get Safe Online on how to protect your information and your computers and devices against fraud, identity theft, viruses and many other online problems, please visit www.getsafeonline.org. Get Safe Online is supported by HM Government and leading businesses.</p>
    <h2>Data Retention</h2>
    <p>Unless a longer retention period is required or permitted by law, we will only hold your Data on our systems for the period necessary to fulfil the purposes outlined in this privacy policy or until you request that the Data be deleted.</p>
    <p>Even if we delete your Data, it may persist on backup or archival media for legal, tax or regulatory purposes.</p>
    <h2>Your Rights</h2>
    <ul>
	  <li>You have the following rights in relation to your Data:
	  <ul>
		<li><b>Right to access</b> - the right to request (i) copies of the information we hold about you at any time, or (ii) that we modify, update or delete such information. If we provide you with access to the information we hold about you, we will not charge you for this, unless your request is "manifestly unfounded or excessive." Where we are legally permitted to do so, we may refuse your request. If we refuse your request, we will tell you the reasons why.</li>
		<li><b>Right to correct</b> - the right to have your Data rectified if it is inaccurate or incomplete.</li>
		<li><b>Right to erase</b> - the right to request that we delete or remove your Data from our systems.</li>
		<li><b>Right to restrict our use of your Data</b> - the right to "block" us from using your Data or limit the way in which we can use it.</li>
		<li><b>Right to data portability</b> - the right to request that we move, copy or transfer your Data.</li>
		<li><b>Right to object</b> - the right to object to our use of your Data including where we use it for our legitimate interests.</li>
	</ul>
	</li>
	<li>To make enquiries, exercise any of your rights set out above, or withdraw your consent to the processing of your Data (where consent is our legal basis for processing your Data), please contact us via this e-mail address: hello (at) pippin.codes.</li>
	<li>If you are not satisfied with the way a complaint you make in relation to your Data is handled by us, you may be able to refer your complaint to the relevant data protection authority. For the UK, this is the Information Commissioner's Office (ICO). The ICO's contact details can be found on their website at https://ico.org.uk/.</li>
	<li>It is important that the Data we hold about you is accurate and current. Please keep us informed if your Data changes during the period for which we hold it.</li>
</ul>

<h2>Links to Other Websites</h2>
	<p>This Website may, from time to time, provide links to other websites. We have no control over such websites and are not responsible for the content of these websites. This privacy policy does not extend to your use of such websites. You are advised to read the privacy policy or statement of other websites prior to using them.</p>
  <h2>Changes of business ownership and control</h2>
  <ul>
	<li>Pippin Burkett may, from time to time, expand or reduce our business and this may involve the sale and/or the transfer of control of all or part of Pippin Burkett. Data provided by Users will, where it is relevant to any part of our business so transferred, be transferred along with that part and the new owner or newly controlling party will, under the terms of this privacy policy, be permitted to use the Data for the purposes for which it was originally supplied to us.</li>
	<li>We may also disclose Data to a prospective purchaser of our business or any part of it.</li>
	<li>In the above instances, we will take steps with the aim of ensuring your privacy is protected.</li>
</ul>
<h2>General</h2>
<ul>
	<li>You may not transfer any of your rights under this privacy policy to any other person. We may transfer our rights under this privacy policy where we reasonably believe your rights will not be affected.</li>
	<li>If any court or competent authority finds that any provision of this privacy policy (or part of any provision) is invalid, illegal or unenforceable, that provision or part-provision will, to the extent required, be deemed to be deleted, and the validity and enforceability of the other provisions of this privacy policy will not be affected.</li>
	<li>Unless otherwise agreed, no delay, act or omission by a party in exercising any right or remedy will be deemed a waiver of that, or any other, right or remedy.</li>
	<li>This Agreement will be governed by and interpreted according to the law of England and Wales. All disputes arising under the Agreement will be subject to the exclusive jurisdiction of the English and Welsh courts.</li>
</ul>
<h2>Changes to this Privacy Policy</h2>
<ul>
	<li>Pippin Burkett reserves the right to change this privacy policy as we may deem necessary from time to time or as may be required by law. Any changes will be immediately posted on the Website and you are deemed to have accepted the terms of the privacy policy on your first use of the Website following the alterations. You may contact Pippin Burkett by email at hello (at) pippin.codes.</li>
</ul>
<h2>Creation of this Privacy Policy</h2>
<p>This privacy policy was created on 3rd May 2022</p>
    </>
  );
}

export default PrivacyPolicy;
