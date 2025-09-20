//komponens = fuggveny jsx-et add vissza -> html +js

import Paragraph from "./components/paragraph";
import kutyus from '../src/images/kutyu.jpg'

function FoxterrierAlkalmazas() {
  return (
    <>
      <Paragraph description="Vizsla leírasa" title="Vizsa">
        <div>Ez itt a gyerek elem </div>
      </Paragraph>
      <Paragraph description="Labrador leirasa" title="Labradr">
        <img src={kutyus} />
        </Paragraph>
      <Paragraph description="Foxterrier leirasa" title="Foxterrier" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam dignissimos illo itaque, quae dolorum quis veniam laudantium, explicabo mollitia aliquam atque porro expedita doloremque eligendi laborum illum neque? In, sit.</p>
    </>
  );
}

export default FoxterrierAlkalmazas;
