//The first step of the pipeline-- matching the documents
db.customers.aggregate([
    {
        $match: {'postalCode': 110089}
    }
]);

//the second step in the pipeline--- grouping the documents
db.customers.aggregate([
    {$match: {'postalCode': 110089}},
    {$group: {
        _id: null,
        count: {
            $sum:1
        }
    }}
]);

//usage of grouping
db.customers.aggregate([
    //step 1
    {
        $match: {
            'postalCode': 110089
        }
    },
    //step 2
    {
        $group : {
            _id: null,
            total: {
                $sum : "$amount"
            },
            averageAmount: {
                $avg: "$amount"
            },
            minAmount: {
                $min: "$amount"
            }, 
            maxAmount: {
                $max: "$amount"
            }
        }
    },
    //step 3
    {
        $sort: {
            total: -1
        }
    }
]);