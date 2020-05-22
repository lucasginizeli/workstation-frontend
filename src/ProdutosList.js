import React, { Component } from "react";
import ProdutosService from "./ProdutosService";

const produtosService = new ProdutosService();


class ProdutosList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            produtos: []

        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        var self = this;
        produtosService.getProdutos().then(function (result) {
            console.log(result);
            self.setState({ produtos: result.data });
        });
    }

    handleDelete(e, id) {
        var self = this;
        produtosService.deleteProduto({ id : id }).then(()=>{
            var newArr = self.state.produtos.filter(function (obj) {
                return obj.id !== id;
            });
            self.setState({ produtos: newArr })
        });
    }

    // nextPage() {
    //     var self = this;
    //     produtosService.getProdutosByURL(this.state.nextPageURL).then((result) => {
    //         self.setState({ produtos: result.data, nextPageURL: result.nextLink })
    //     })
    // }

    render() {

        return (
            <div className="produtos--list">
                <table className="table">
                    <thead key="thead">
                    <tr>
                        <th>#</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Ações</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.produtos.map( p =>

                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.descricao}</td>
                            <td>{p.quantidade}</td>
                            <td>
                                <button onClick={(e)=> this.handleDelete(e,p.id)}> Delete</button>
                                <a href={"/produto/" + p.id}> Update</a>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                {/*<button className="btn btn-primary" onClick={ this.nextPage }>Next</button>*/}
            </div>
        );
    }
}
export default ProdutosList;