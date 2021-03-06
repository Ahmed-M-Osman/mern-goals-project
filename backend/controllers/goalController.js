const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @desc    Get goals
// @routes  GET /api/goals
// @acess   Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc    Set goal
// @routes  POST /api/goals
// @acess   Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }
    const goal = await Goal.create({
        text: req.body.text,
    })

    res.status(200).json(goal)
})

// @desc    Update goal
// @routes  PUT /api/goals/:id
// @acess   Private
const updateGoal = asyncHandler(async (req, res) => {
const goal = await Goal.findById(req.params.id)

if(!goal){
    res.status(400)
    throw new Error('Goal not found!')
}

const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})

// @desc    Delete goal
// @routes  DELETE /api/goals/:id
// @acess   Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found!')
    }

    //const deletedGoal = await Goal.findByIdAndRemove(req.params.id)
    await goal.remove()
    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}