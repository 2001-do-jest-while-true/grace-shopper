import React from 'react'

class Filters extends React.Component {
  constructor() {
    super()
    this.state = {
      expanded: false,
      'business/casual': true,
      halloween: true,
      medieval: true,
      gamer: true,
      summer: true,
      xmas: true,
      misc: true
    }

    this.expandClickHandler = this.expandClickHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  expandClickHandler() {
    const expandedState = this.state.expanded
    this.setState({
      expanded: !expandedState
    })
  }

  //REMOVE ASYNC?
  async handleChange() {
    await this.setState({
      [event.target.name]: event.target.checked
    })

    const filterList = [
      'business/casual',
      'halloween',
      'medieval',
      'gamer',
      'summer',
      'xmas',
      'misc'
    ]
    const updatedFilters = filterList.filter(
      filterType => this.state[filterType]
    )
    this.props.setFilters(updatedFilters)
  }

  render() {
    return (
      <div id="filter-container">
        <div onClick={this.expandClickHandler}>
          {this.state.expanded ? 'Category Filters ▾' : 'Category Filters ▸'}
        </div>
        {this.state.expanded && (
          <form id="category-filters">
            <div className="filter-check">
              <input
                type="checkbox"
                name="business/casual"
                value="business/casual"
                checked={this.state['business/casual']}
                onChange={this.handleChange}
              />
              <label htmlFor="business/casual">Business/Casual</label>
            </div>

            <div className="filter-check">
              <input
                type="checkbox"
                name="halloween"
                value="halloween"
                checked={this.state.halloween}
                onChange={this.handleChange}
              />
              <label htmlFor="halloween">Halloween</label>
            </div>

            <div className="filter-check">
              <input
                type="checkbox"
                name="medieval"
                value="medieval"
                checked={this.state.medieval}
                onChange={this.handleChange}
              />
              <label htmlFor="medieval">Medieval</label>
            </div>

            <div className="filter-check">
              <input
                type="checkbox"
                name="gamer"
                value="gamer"
                checked={this.state.gamer}
                onChange={this.handleChange}
              />
              <label htmlFor="gamer">Gamer</label>
            </div>

            <div className="filter-check">
              <input
                type="checkbox"
                name="summer"
                value="summer"
                checked={this.state.summer}
                onChange={this.handleChange}
              />
              <label htmlFor="summer">Summer</label>
            </div>

            <div className="filter-check">
              <input
                type="checkbox"
                name="xmas"
                value="xmas"
                checked={this.state.xmas}
                onChange={this.handleChange}
              />
              <label htmlFor="xmas">Xmas</label>
            </div>

            <div className="filter-check">
              <input
                type="checkbox"
                name="misc"
                value="misc"
                checked={this.state.misc}
                onChange={this.handleChange}
              />
              <label htmlFor="misc">Misc.</label>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default Filters
