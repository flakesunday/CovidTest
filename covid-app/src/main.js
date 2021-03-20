import React /*{useState}*/ from 'react'
import Select from 'react-select'
import './main.css'



class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectOptions: [],
            searchInput: props.searchInput,
            countryName: ' ',
            confirmTotal: ' - ',
            deadTotal: ' - ',
            recoverTotal: ' - '
        }
        this.handleChange = this.handleChange.bind(this)

    }
    // take value to input 

    handleChange(e) {

        let { value, confirm, death, recover } = e;
       if(e.recover === 0){
           recover = 'UnReported'
       }
       if(e.confirm === 0){
           confirm = 'UnReported'
       }
       if(e.death === 0){
           death = 'UnReported'
       }
        this.setState({
            deadTotal: death,
            countryName: value,
            confirmTotal: confirm,
            recoverTotal: recover

        });
        console.log(e.recover)
        console.log(this.state.deadTotal)

        console.log(this.state.countryName)
        // console.log([name])


    }
    // Get API  when start project 

    componentDidMount() {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://api.covid19api.com/summary',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864'
            }


        };
        axios(config)
            .then((response) => {
                var country_obj = response.data.Countries
                const options = country_obj.map(d => ({
                    "value": d.Country,
                    "label": d.Country,
                    "confirm": d.TotalConfirmed,
                    "death": d.TotalDeaths,
                    "recover": d.TotalRecovered

                }))


                this.setState({ selectOptions: options })

                console.log(this.state.selectOptions)


            })
            .catch(function (error) {
                alert(error);
            });

    }
    render() {

        return (
            <div className='container main'>
                <div>
                 
                    <div className= 'selectbar'>
                        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} placeholder='Search Your Country'/>
                    </div>
                    <div className= 'container show-all' >

                        <h1 className="H1"> {this.state.countryName} </h1>
                        <div className='row show-all-case'>
                            <div className='col-md show-confirmed-case'>
                                <h2> Confirm case: <br/> {this.state.confirmTotal}</h2>
                            </div>
                            <div className='col-md show-death-case'>
                                <h2> Death case: <br/> {this.state.deadTotal}</h2>
                            </div>
                            <div className='col-md show-recover-case'>
                                <h2> Recover case: <br/>{this.state.recoverTotal}</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>)
    }

}



export default Main