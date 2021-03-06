Project Review

- Rooms App
    full crud
    Models
        - users

        const userSchema = new Schema({
            email: String,
            password: String,
            fullName: String,
            imageUrl: String,
            facebookID: String,
            googleID: String
            }, {
            timestamps: true
        });
        - Rooms
            const roomSchema = new Schema({
                name: { type: String },
                description: { type: String },
                imageUrl: { type: String },
                location: {type: {type: String}, coordinates: [Number]},
                owner: { type: Schema.Types.ObjectId, ref: 'User' },
                reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
            })
        - reviews

            const reviewSchema = new Schema({
                user: { type: Schema.Types.ObjectId, ref: 'User' },
                comment: { type: String,  maxlength: 200 },
                rating: {type: Number, enum: [0,1,2,3,4,5]}
            })
    Views
        - frontend - bootstrap
        - home - map (all locations) + list of rooms
        - signup, login and logout - local strategy and social login (fb and google)
        - users - email confirmation (mailtrap), profile with image (cloudinary)
        - rooms - search/filter -> 3rd level - map - google map, image
            - reviews - rating - per user and average for room
    Roles
        - users create rooms and edit their own
        - users review other people rooms
        - 
    Deploy - heroku

Milestones

1st - Setup Node + Express + Views (bootstrap) + .env + basic routes
    When? 23/02
2nd - Models + CRUD + Images
    When? 23 - 28/02
3rd - Maps
    When? 02/03
4th - Auth + Email
    When? 02 - 7/03
5th - Tests and Deploy
    When? 9/03