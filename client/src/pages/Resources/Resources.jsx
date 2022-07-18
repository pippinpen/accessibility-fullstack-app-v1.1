import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Header from '../../components/Header/Header';

function Resources() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Header />
      <main>
        <h1 className="pageHeader">Resources</h1>
        <div className="pageContainer">
          <p>
            Want to learn more about accessibility? Here are some amazing
            resources to get you started.
          </p>
          <h2>What is accessibility?</h2>
          <ul>
            <li>Article: <a href="https://www.seewritehear.com/learn/what-is-accessibility/">What is Accessibility?</a>, 2020 by See Write Hear</li>
            <li>Article: <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility">What is web accessibility?</a>, 2022 by MDN</li>
            <li>Article: <a href="https://www.apa.org/ed/precollege/psychology-teacher-network/introductory-psychology/disability-models">Conceptualizing disability: Three models of disability</a>, 2002 by Rhoda Olkin</li>
          </ul>
          <h2>Theorising Access</h2>
          <ul>
            <li>Article: <a href="https://leavingevidence.wordpress.com/2011/05/05/access-intimacy-the-missing-link/">Access Intimacy: The Missing Link</a>, 2011 by Mia Mingus</li>
            <li>Book: <a href="https://johannahedva.com/SickWomanTheory_Hedva_2020.pdf">Sick Woman Theory</a>, 2020 by Johanna Hedva</li>
            <li>Book: Disability Visibility, 2020 by Alice Wong</li>
            <li>Documentary: CripCamp, 2020 by Nicole Newnham and James LeBrecht</li>
          </ul>
          <h2>Design and Accessibility</h2>
          <ul>
            <li>Book: A Web for Everyone: Designing Accessible User Experiences, 2014 by Sarah Horton and Whitney Quesenbery</li>
            <li>Book: Inclusive Design for a Digital World: Designing with Accessibility in Mind, 2019 by Regine Gilbert</li>
          </ul>
          <h2>Big Data and Accessibility</h2>
          <ul>
            <li>Book: Weapons of Math Destruction, 2016 by Cathy O'Neil</li>
            <li>Article: <a href="https://www.kinandcarta.com/en/insights/2022/04/the-data-says-i-dont-exist-digital-accessibility-kevin-marmolinero/">Digital Accessibility: the data says I don't exist</a>, 2022 by Kevin Mar-Molinero </li>
          </ul>
          <h2>Online Accessibility</h2>
          <ul>
            <li>Article: <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">W3C Web Accessibility Standards</a>, 2022 by Web Accessibility Initiative (WAI)</li>
          </ul>
          <h2>Accessible Materials</h2>
          <ul>
            <li>Article: <a href="https://www.disability.admin.cam.ac.uk/staff-supporting-disabled-students/teaching-disabled-students/accessible-materials">Accesible Materials Guidance</a>, 2022 by the Disability Resource Centre at University of Cambridge</li>
            <li>Policy Resource: <a href="https://www.universaldesign.ie/technology-ict/web-accessibility-techniques1/">Web accessibility techniques</a>, 2020 by Universal Design and National Disability Authority</li>
            <li>Policy Resource: <a href="https://www.bbc.co.uk/accessibility">BBC Accessibility Help</a>, 2022 by the BBC</li>
          </ul>
          <h2>Assistant dogs</h2>
          <ul>
            <li>Leaflet: <a href="https://www.equalityhumanrights.com/sites/default/files/assistance-dogs-a-guide-for-all-businesses.pdf">Assistant dogs: a guide for all businesses</a>, 2017 by Equality and Human Rights Commission</li>
          </ul>
          <p>For even more resources visit <a href="https://www.a11yproject.com/resources/">The A11y Project</a>, an open source site developed collectively by developer on GitHub.</p>
        </div>
      </main>
    </>
  );
}

export default Resources;
