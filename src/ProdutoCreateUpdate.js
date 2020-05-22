import React, { Component } from "react";
import ProdutosService from "./ProdutosService";

const produtosService = new ProdutosService();


class ProdutoCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        if(params && params.id)
        {
            produtosService.getProduto(params.id).then((p)=>{
                console.log(p);
                this.refs.descricao.value = p.descricao;
                this.refs.quantidade.value = p.quantidade;
            })
        }
    }

    handleCreate() {
        produtosService.createProduto(
            {
                "descricao": this.refs.descricao.value,
                "quantidade": this.refs.quantidade.value
            }
        ).then((result)=>{
            alert("Produto criado!");
        }).catch(()=>{
            alert("Erro. Cheque o formulário.");
        });
    }

    handleUpdate(id) {
        produtosService.updateProduto(
            {
                "id": id,
                "descricao": this.refs.descricao.value,
                "quantidade": this.refs.quantidade.value
            }
        ).then((result)=>{
            console.log(result);
            alert("Produto atualizado!");
        }).catch(()=>{
            alert("Erro. Cheque o formulário.");
        })
    }

    handleSubmit(event) {
        const { match: { params }} = this.props;

        if(params && params.id) {
            this.handleUpdate(params.id);
        }
        else
        {
            this.handleCreate();
        }

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        Descrição:</label>
                    <input className="form-control" type="text" ref="descricao" />

                    <label>
                        Quantidade:</label>
                    <input className="form-control" type="number" ref="quantidade" />

                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>
            </form>
        );
    }

}

export default ProdutoCreateUpdate;