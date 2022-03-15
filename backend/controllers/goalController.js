const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @routes  GET /api/goals
// @acess   Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})

// @desc    Set goal
// @routes  POST /api/goals
// @acess   Private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }
    res.status(200).json({ message: 'Set Goal' })
})

// @desc    Update goal
// @routes  PUT /api/goals/:id
// @acess   Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}`})
})

// @desc    Delete goal
// @routes  DELETE /api/goals/:id
// @acess   Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}