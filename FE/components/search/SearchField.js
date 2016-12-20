var delay = 3000;
var isLoading = false;
var isDirty = false;
import React, { Component } from 'react'

export default class SearchField extends Component {

	handleChange(event) {
		var self = this;
		isDirty = true;
		reloadSearch();
		function reloadSearch() {
			if(!isLoading){
				var q = $('#address').val();
				if (q.length >= 3) {
					isLoading = true;
					console.log(q)
					self.props.onFilterInput(
						q
					)
					setTimeout(function(){
						isLoading=false;
						if(isDirty){
							isDirty = false;
							reloadSearch();
						}
					}, delay);
				}
			}
		};
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onChooseType(this.state.value);
		this.getDOMNode().querySelector('input').blur();
	}

	render() {
        var searchList = this.props.location;

		return (
			<form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<div className="col-xs-12">
						<div className="input-group">
							<input type="text" className="form-control" id="address" placeholder="Find a location..." 
							value={this.props.filterText} onChange={this.handleChange.bind(this)} list="search_list" />
                            <datalist id="search_list">
                                {
									!searchList ?
										'Загрузка...'
										:
									searchList
										.map(function(data){
											return  <option>{data.title}</option>
										})
								}
                            </datalist>
							<span className="input-group-btn">
								<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
							</span>
						</div>
					</div>
				</div>
			</form>
		);

	}
}