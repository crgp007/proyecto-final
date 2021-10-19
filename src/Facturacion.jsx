import React,{Component} from "react"



class Facturacion extends Component {


  
    constructor(props) {
      super(props);
      this.state = {value: ''};     
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
      alert('Su informacion ha sido Guardada con exito! Y enviada a Contabilidad: ' + this.state.value);
      event.preventDefault();
    }
      
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>        <label>
          <h1>Ingresa tus datos de Facturacion</h1>
          <h2>  RFC :</h2>
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
            

          
          <h3>Uso de Factura</h3>
          <select>
            <option value="G01">G01 --  Adquisición de mercancías</option>
            <option value="G02">G02 --  Devoluciones, descuentos o bonificaciones</option>
            <option selected value="G03">G03 --  Gastos en General</option>
            <option value="I01">I01  --  Construcciones</option>
          </select>

          <h5>Agregue Archivo de su ticket de Pago</h5>
          <input type="file" />
            
          

          <textarea>
           Buen dia , agregue comentarios adicionales como concepto o alguna direccion que desea agregar.
          </textarea>

          <h4>Verifique sus Datos sean Correctos antes de enviar</h4>

          <input type="submit" value="Enviar" />

        </form>
      );
    }
  }

  

export default Facturacion;
