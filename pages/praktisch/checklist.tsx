// Deze pagina bevat:
// - checklist bij vertrek in digitale vorm

import Checkbox from 'components/Checkbox';
import ProseSection from 'components/ProseSection';

const ChecklistPage = () => {
  return (
    <>
      <ProseSection>
        <h2>Keuken</h2>
        <Checkbox>Koelkast leeg en schoon</Checkbox>
        <Checkbox>Stekker van de koelkast uit stopcontact</Checkbox>
        <Checkbox>Deur van de koelkast open</Checkbox>
        <Checkbox>Vloer gestofzuigd</Checkbox>
        <Checkbox>Vloer gedweild</Checkbox>
        <Checkbox>Gootsteen schoongemaakt</Checkbox>
        <Checkbox>Fornuis op stand "off" gezet</Checkbox>
        <Checkbox>Afvalbakken leeg en schoon</Checkbox>
        <Checkbox>Luxaflex naar beneden en dicht</Checkbox>
        <Checkbox>Verwarming uit</Checkbox>
        <Checkbox>Stekkers uit stopcontacten</Checkbox>
        <Checkbox>Verlichting uit</Checkbox>
      </ProseSection>
      <ProseSection>
        <h2>Badkamer</h2>
        <Checkbox>Waterpomp op stand "off"</Checkbox>
        <Checkbox>Boiler op stand "0"</Checkbox>
        <Checkbox>Kraan van wasmachine dicht</Checkbox>
        <Checkbox>Wasmachine op stand "off"</Checkbox>
        <Checkbox>Vloer gestofzuigd</Checkbox>
        <Checkbox>Vloer gedweild</Checkbox>
      </ProseSection>
    </>
  );
};

export default ChecklistPage;
