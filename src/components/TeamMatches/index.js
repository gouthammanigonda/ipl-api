// Write your code here
import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  componentDidMount() {
    this.getTeamDetailsApi()
  }

  getTeamDetailsApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.latest_match_details)

    const lastMatchDetails = data.latest_match_details.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    console.log(lastMatchDetails)
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    return (
      <div className={`team-container ${id}`}>
        <h1>hi</h1>
      </div>
    )
  }
}

export default TeamMatches
