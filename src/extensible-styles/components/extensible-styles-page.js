import {CustomButton} from './custom-button';
import {Button} from './normal-button';

export const ExtensibleStylesPage = () => (
  <>
    <h2>Ejemplo sin Extensible Styles</h2>
    <Button type="button">Click</Button>
    <hr />

    <h2>Ejemplo con Extensible Styles</h2>
    <CustomButton
      className="btn btn-success"
      type="button"
      style={{color: '#ff0000'}}
    >
      Click
    </CustomButton>
  </>
);
