# benchamrk

see this [link](https://imgur.com/a/m09cbp5) for result  
nodejs (typescript) + prisma is **0.43s** faster than python + flask_sqlalchemy  

it should be tested in a different env, but i think at the end of the day prisma will

test both expressjs and python app with `seed.py` it seems like python `requests` library is faster than `axios`.  

Most probably my test is not as scentific as it should be, but i think it but i think prisma will win b/c prisma engine is written in `rust`, but `sqlalchemy` is written in python.  

and the productivity gain you have with prisma is insane compare to sqlalchemy. with prisma you have **type checking && auto completion && prisma studio** but with sqlalchemy you don't have the first two and for each sql driver you have to install differnet GUI. for example for `sqlite` you have to install `DB browser sqlite` to see inside of the sqlite table.  

## Important

this experiment is more in favor of python than javascript. b/c i write typescript and run the code with `ts-node` typescript will be a little slower.  
i believe that if you run javascript and run it with `node` command, probably it will faster than python.  

And i write both javascript and python without any optimization.

see you at 2.1.2023 i think 😃

PS. don't use `nodemon` while testing.