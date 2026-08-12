const FB_KEY='shia-resource-hub-plan-feedback';
const readFeedback=()=>{try{return JSON.parse(localStorage.getItem(FB_KEY)||'{}')}catch{return {}}};
const feedbackAdjustments={worked:3,help:1,'too-much':-2,'lost-interest':-3};
function getResourceFeedbackScore(id){const all=readFeedback();return Object.values(all).filter(x=>x?.resourceId===id).reduce((n,x)=>n+(feedbackAdjustments[x.value]||0),0)}
function rankWithFeedback(resources){return [...resources].sort((a,b)=>getResourceFeedbackScore(b.id)-getResourceFeedbackScore(a.id))}
window.recommendationFeedback={readFeedback,getResourceFeedbackScore,rankWithFeedback};