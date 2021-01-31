import React, {useState} from 'react';
import {Widget} from '../Widget';
import {Button} from '../Button';
import {useRouter} from 'next/router';

export default function ResultWidget (props){
	const router = useRouter();
	const results = props.results.filter((x) => x).length;


    function backToHome(e) {
        e.preventDefault();
        router.push("/");

    }

    return(
			<Widget>
				<Widget.Header>
					<h3>Seus resultados</h3>
			</Widget.Header>
				<Widget.Content>
					<p>
				Você acertou
          {' '}
          {props.results.filter((x) => x).length}
          {' '}
          perguntas
        </p>
{results <= 3 ? 
      <img src={props.bgFailed}
	  alt="descrição"
	  style={{
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	  }}
	/>
	:
	<>
	<p>Tio Vader está orgulhoso</p>
	<img src={props.bgSucess}
	alt="descrição"
	style={{
	  width: '100%',
	  height: '100%',
	  objectFit: 'cover'
	}}
  />
  </>
}
					<Button type="submit" onClick={(e) => backToHome(e)}>Jogar novamente</Button>

				</Widget.Content>

			</Widget>

	);
}