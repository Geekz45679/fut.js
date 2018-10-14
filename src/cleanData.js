const fetch = require('node-fetch');
const endpoint = 'https://www.easports.com/fifa/ultimate-team/api/fut/item?jsonParamObject={"name":"{}"}';

module.exports = async (data) => {
	try {
		if (data.count === 0) return null;
		const playerData = [];
		await data.items.forEach(player => {
			playerData.push({
				info: {
					name: player.name,
					birthdate: player.birthdate, /* The player's DOB, in the MM/DD/YYYY format (ie: /0/) */
					position: player.position, /* Abbreviation of the position (ie: ST = Striker) */
					positionName: player.positionFull, /* Full name of the position */
					age: player.age,
					weight: player.weight, /* Measured in metric units (kg) */
					height: player.height, /* Measured in metric units (cm) */
					foot: player.foot,
					club: player.club.name,
					nation: player.nation.name,
					league: player.league.name,
					headshot: player.headshot.imgUrl,
					id: player.id,
					baseId: player.baseId,
					quality: player.quality /* Gold, Silver, Bronze */
				},
				stats: {
					overall: player.rating,
					workrates: { attacking: player.atkWorkRate, defensive: player.defWorkRate },
					weakfoot: player.weakFoot,
					skillmoves: player.skillMoves,
					specialties: player.specialties,
					traits: player.traits,
					attributes: [{
						name: player.attributes[0].name.slice(14),
						value: player.attributes[0].value
					}, {
						name: player.attributes[1].name.slice(14),
						value: player.attributes[1].value
					}, {
						name: player.attributes[2].name.slice(14),
						value: player.attributes[2].value
					}, {
						name: player.attributes[3].name.slice(14),
						value: player.attributes[3].value
					}, {
						name: player.attributes[4].name.slice(14),
						value: player.attributes[4].value
					}, {
						name: player.attributes[5].name.slice(14),
						value: player.attributes[5].value
					}],
					composure: player.composure,
					acceleration: player.acceleration,
					aggression: player.aggression,
					agility: player.agility,
					balance: player.balance,
					ballcontrol: player.ballcontrol,
					crossing: player.crossing,
					curve: player.curve,
					dribbling: player.dribbling,
					finishing: player.finishing,
					freekickaccuracy: player.freekickaccuracy,
					goalkeeping: {
						gkdiving: player.gkdiving,
						gkhandling: player.gkhandling,
						gkkicking: player.gkkicking,
						gkpositioning: player.gkpositioning,
						gkreflexes: player.gkreflexes,
					},
					headingaccuracy: player.headingaccuracy,
					interceptions: player.interceptions,
					jumping: player.jumping,
					longpassing: player.longpassing,
					longshots: player.longshots,
					marking: player.marking,
					penalties: player.penalties,
					positioning: player.positioning,
					reactions: player.reactions,
					shortpassing: player.shortpassing,
					shotpower: player.shotpower,
					slidingtackle: player.slidingtackle,
					sprintspeed: player.sprintspeed,
					standingtackle: player.standingtackle,
					stamina: player.stamina,
					strength: player.strength,
					vision: player.vision,
					volleys: player.volleys
				}
			});
		});
		return playerData || null;
	} catch (error) {
		return console.error(new Error(error));
	}
};