import Accordion from "./components/Accordion/Accordion.jsx";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
        <Accordion.Item id='expirience' className='accordion-item' title="We got 20 years of expiriense">
          <article>
            <p>You can&apos; go wrong with us.</p>
            <p>We are in the buiisness of planning highly individualized vacation trips for more than 20 years.</p>
          </article>
        </Accordion.Item>
        <Accordion.Item id='local-guides' className='accordion-item' title="We`re working with local guides">
          <article>
            <p>Whe are not doing this along from our office.</p>
            <p>Instead, we are working with local guides to ensure a safe and pleasant vacation.</p>
          </article>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>
}

export default App;
