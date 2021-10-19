import React,{Component} from "react"

class Registro extends Component{

    //Crear el contructor
    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            correo: ""
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        

    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }
    cambiarEdad(e){
        this.setState({
            edad: e.target.value
        })
    }

    render(){
        return(
            <div className="ed-grid">
                <h1>Formulario de Nuevo - Registro</h1>
                <form>
                    <div className="form_item">
                        <label>Nombre Completo</label>
                        <input type="text"
                        onChange={this.cambiarNombre}
                        />
                        </div>
                        <div className="form_item">
                        <label>Email: </label>
                        <input type="email"
                        onChange={this.cambiarCorreo}
                        />
                        <label>Selecciona Tipo de Membresia </label>
                        <select>
                        <option value="1">Basica</option>
                        <option value="2">Socio Plata</option>
                         <option selected value="3">Socio Oro</option>
                         <option value="4">Premier</option>
                        </select>
                        <label>Selecciona Medio de Pago </label>
                        <select>
                        <option value="1">Efectivo</option>
                        <option value="2">Tarjeta de Credito</option>
                         <option selected value="3">Deposito Bancario </option>
                         <option value="4">Tarjeta de Credito</option>
                        </select>

                    </div>
                    <div className="form_item">
                        <input className="button full" type="submit" value="Enviar"/>
                    </div>


                </form>
                <div>
                    <h1>Bienvenido a Nuestra Familia</h1>
                    <h2>{` ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.correo }`}</span>
                </div>
            </div>
        )
    }
}

export default Registro;
