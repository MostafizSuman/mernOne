let title;
            //logical OR_ASSIGNMENT operator x||=y is equivalent to x||(x=y)
            //if x is falsy (false, 0, null or undefined) than y is assigned to x
            document.write("<br>ogical OR_ASSIGNMENT operator x||=y<br>");
            title||='untitled';
            document.write("title:"+title);
            title||='operator';
            document.write("<br>title:"+title);
            m=0;
            m||=5;
            document.write("<br>m:"+m);
            //logical AND_ASSIGNMENT operator x&&=y is equivalent to x && (x=y)
            //if x and
            document.write("<br>ogical AND_ASSIGNMENT operator x&&=y<br>");
            let ttl;
            ttl&&='untitled';
            document.write("ttl:"+ttl);
            ttl="title"
            ttl&&='operator';
            document.write("<br>ttl:"+ttl);
            m=0;
            m&&=5;
            document.write("<br>m:"+m);
            m=1;
            m&&=5;
            document.write("<br>m:"+m);
            m&&=0;
            document.write("<br>m:"+m);
            //nullish coalescing assignment operator x??=y is equivalent to x=x??y
            //The nullish coalescing assignment operator only assigns y to x if x is null or undefined:
            let user = {
                username: 'Satoshi'
            };
            user.nickname ??= 'anonymous';
            document.write("<br>user:"+user.nickname);
            //console.log(user);
            //exponentiation operator **
            let x=5 ** 3;
            document.write("<br>x=5**3:->"+x);

           
            


            
