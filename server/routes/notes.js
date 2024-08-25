const express = require('express');
const auth = require('../middleware/auth');
const Note = require('../models/Note');
const router = express.Router();

// Get all notes
router.get('/', auth, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id }).sort({ pinned: -1, createdAt: -1 });
        res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add new note
router.post('/create', auth, async (req, res) => {
    const { title, content, pinned } = req.body;
    try {
        if(!title){
            return res.status(400).json({ msg: 'Title is required' });
        }

        if(!content){
            return res.status(400).json({ msg: 'Content is required' });
        }
        const newNote = new Note({
            user: req.user.id,
            title,
            content,
            pinned
        });

        const note = await newNote.save();
        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update note
router.put('/update/:id', auth, async (req, res) => {
    const { title, content, pinned } = req.body;
    const noteFields = { title, content, pinned };

    try {
        let note = await Note.findById(req.params.id);

        if (!note) return res.status(404).json({ msg: 'Note not found' });

        // Ensure user owns note
        if (note.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        note = await Note.findByIdAndUpdate(req.params.id, { $set: noteFields }, { new: true });

        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete note
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);

        if (!note) return res.status(404).json({ msg: 'Note not found' });

        // Ensure user owns note
        if (note.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        await Note.deleteOne({ _id: req.params.id, user: req.user.id });

        res.json({ msg: 'Note removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update pinned status
router.put('/pin/:id', auth, async (req, res) => {
    const { pinned } = req.body;

    try {
        let note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ msg: 'Note not found' });
        }

        // Ensure user owns the note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        // Update the pinned status
        note.pinned = pinned;

        // Save the updated note
        await note.save();

        res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;
